# 远程
## 登入系统
### 出错时删除之前的ssh信息
ssh-keygen -R "149.28.42.102"
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
## ubuntu
1. 安装
> apt-get install python-pip
> pip install shadowsocks

2. 配置文件(在根目录的etc目录下)
> sudo vi /etc/shadowsocks.json
~~~ JSON
{
  "server": "149.28.42.102",
  "local_address": "127.0.0.1",
  "local_port": 1080,
  "server_port": 6688,
  "password": "32038Guolj",
  "timeout": 300,
  "method": "aes-256-cfb"
}
~~~

3. 启动
> sslocal -c /etc/shadowsocks.json

4. 重启
> sslocal -c /etc/shadowsocks.json -d restart

5. 开机自启动
> sudo vim /etc/systemd/system/shadowsocks.service
~~~ s
[Unit]
Description=Shadowsocks Client Service
After=network.target

[Service]
Type=simple
User=root
ExecStart=/usr/bin/sslocal -c /etc/shadowsocks.json

[Install]
WantedBy=multi-user.target
~~~
> systemctl enable /etc/systemd/system/shadowsocks.service