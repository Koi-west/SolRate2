#!/bin/bash

# 创建 types 文件夹
mkdir -p types

# 创建 window.d.ts 文件并添加内容
cat << EOF > types/window.d.ts
interface Window {
  solana?: {
    isPhantom?: boolean;
    connect: (options?: { onlyIfTrusted: boolean }) => Promise<{ publicKey: { toString: () => string } }>;
    on: (event: string, callback: () => void) => void;
    disconnect: () => Promise<void>;
  };
}
EOF

# 更新 tsconfig.json
# 注意：这里使用 jq 来修改 JSON 文件，如果没有安装 jq，请先安装它
if ! command -v jq &> /dev/null; then
    echo "jq is not installed. Please install it first."
    exit 1
fi

jq '.compilerOptions.typeRoots = ["./node_modules/@types", "./types"]' tsconfig.json > tsconfig.tmp.json && mchmod +x setup.shv tsconfig.tmp.json tsconfig.json

# 修改 Header.tsx 文件
# 注意：这里假设 Header.tsx 文件在 src/components/Layout/ 目录下
sed -i 's/const solana = window.solana;/const solana = (window as Window \& { solana: any }).solana;/' src/components/Layout/Header.tsx

echo "Setup completed successfully!"