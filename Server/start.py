import logging
from pathlib import Path

def install_flask():
    from subprocess import run
    result = run('pip install flask-restful')
    logging.info(f"flask-restful installed")
    return

def start_server():
    import flask_restful

def main():
    from subprocess import run

# Setup the logger
logging.basicConfig(format="%(levelname)s: %(message)s")
logging.getLogger().setLevel(logging.INFO)

install_flask()
logging.info(f"Starting the server...")
start_server()


if __name__ == "__main__":
    main()