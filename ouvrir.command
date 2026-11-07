#!/bin/zsh
set -eu
cd -- "${0:A:h}"
if ! command -v python3 >/dev/null; then
  echo 'Python 3 est nécessaire pour ouvrir cet aperçu local.'
  read '?Appuyez sur Entrée pour fermer.'
  exit 1
fi
exec python3 -B apercu.py --ouvrir
