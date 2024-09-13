if which programname >/dev/null; then
    echo "Exposing port 5000"
    gh codespace ports visibility 5000:public -c $CODESPACE_NAME
fi

