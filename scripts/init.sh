# Check if bun is installed

bun --version
if [ $? -ne 0 ]; then
    echo curl -fsSL https://bun.sh/install | bash
    export PATH=$PATH:$HOME/.bun/bin
    exit 1
fi

# Init Clerk