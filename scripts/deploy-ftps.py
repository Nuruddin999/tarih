"""Upload static export without deleting existing files or old hashed assets."""
import ftplib
import os
from pathlib import Path
import ssl


def main():
    config = {key: os.environ.get(key, '') for key in (
        'FTP_HOST', 'FTP_USER', 'FTP_PASSWORD', 'FTP_REMOTE_DIR')}
    if not all(config.values()):
        raise SystemExit('Set FTP_USER, FTP_PASSWORD and FTP_REMOTE_DIR in GitHub Secrets.')
    target = config['FTP_REMOTE_DIR']
    if '\r' in target or '\n' in target:
        raise SystemExit('Invalid FTP_REMOTE_DIR.')
    root = Path('out')
    if not (root / 'index.html').is_file() or not (root / '_next').is_dir():
        raise SystemExit('Static export is missing: expected out/index.html and out/_next.')
    # Assets first, route data next, HTML last. Retain old chunks for open browser tabs.
    files = sorted((p for p in root.rglob('*') if p.is_file()),
                   key=lambda p: (p.suffix == '.html', p.relative_to(root).as_posix()))
    with ftplib.FTP_TLS(context=ssl.create_default_context(), timeout=60) as ftp:
        ftp.connect(config['FTP_HOST'], 21)
        ftp.login(config['FTP_USER'], config['FTP_PASSWORD'])
        ftp.prot_p()
        # Must exist: never guess or create the site's root directory.
        ftp.cwd(target)
        destination = ftp.pwd()
        for path in files:
            relative = path.relative_to(root)
            ftp.cwd(destination)
            for part in relative.parts[:-1]:
                try:
                    ftp.cwd(part)
                except ftplib.error_perm:
                    ftp.mkd(part)
                    ftp.cwd(part)
            temporary = relative.name + '.deploy-tmp'
            with path.open('rb') as source:
                ftp.storbinary('STOR ' + temporary, source)
            ftp.rename(temporary, relative.name)
        print(f'Uploaded {len(files)} files. Existing server files were not deleted.')


if __name__ == '__main__':
    main()
