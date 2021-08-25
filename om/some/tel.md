# Telnet 安装

检查 telnet
检查是否安装有 telnet，键入：

```bash
rpm -qa | grep telnet
```

回车返回空值则说明没有安装，返回 telnet 版本号则说明已经安装；
检查 xinetd
检查是否安装有 xinetd，键入：

```bash
rpm -qa | grep xinetd
```

回车返回空值则说明没有安装，返回 xinetd 版本号则说明已经安装；

安装 telnet

```bash
yum -y install telnet\*
```

安装 telnet 客户端和服务端；

安装 xinetd

```bash
yum -y install xinetd
```

安装 xinetd 客户端和服务端；

开启服务
telnet 服务安装之后，默认是不开启服务，修改文件

```bash
vim /etc/xinetd.d/telnet
```

来开启服务。如果在 xinetd.d 目下没有 telnet 文件，那么就需要使用 vim telnet 创建一个文件并写入以下内容保存即可，注意如果目录下存在 telnet 需要将 disable 修改为 disable = no 默认的 disable = yes

```conf
# default: yes

# description: The telnet server servestelnet sessions; it uses \

# unencrypted username/password pairs for authentication.

service telnet
{
flags = REUSE
socket_type = stream
wait = no
user = root
server =/usr/sbin/in.telnetd
log_on_failure += USERID
disable = no
}
```

重启服务
由于上面修改了 telnet 配置文件，需要重新启动下服务，看 telnet、xinetd 是否启动成功；

```bash
systemctl restart xinetd.service
```

重启 xinetd 服务；

```bash
ps -ef | grep xinetd
```

查看 xinetd 服务；

```bash
ps -ef | grep telnet
```

查看 telnet 服务；

开机服务

```bash
systemctl enable xinetd.service
```

将 xinetd 加入到开机启动服务；

```bash
systemctl enable telnet.socket
```

将 telnet 加入到开机启动服务；
