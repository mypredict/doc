# 远程
## 登入系统
1. ssh root@<ip>
2. 输入 yes
3. 输入 vultr 密码(自带的)
## 安装 shadowsocks
wget --no-check-certificate -O shadowsocks.sh https://raw.githubusercontent.com/teddysun/shadowsocks_install/master/shadowsocks.sh
chmod +x shadowsocks.sh
./shadowsocks.sh 2>&1 | tee shadowsocks.log
## 配置
1. 密码
2. 端口号(6688)
3. 加密方式(aes-256-cfb)

# 客户端