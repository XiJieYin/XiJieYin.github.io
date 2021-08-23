# [Redis](http://www.redis.cn/)

>Redis 是一个开源（BSD许可）的，内存中的数据结构存储系统，它可以用作数据库、缓存和消息中间件。 它支持多种类型的数据结构，如 字符串（strings）， 散列（hashes）， 列表（lists）， 集合（sets）， 有序集合（sorted sets） 与范围查询， bitmaps， hyperloglogs 和 地理空间（geospatial） 索引半径查询。 Redis 内置了 复制（replication），LUA脚本（Lua scripting）， LRU驱动事件（LRU eviction），事务（transactions） 和不同级别的 磁盘持久化（persistence）， 并通过 Redis哨兵（Sentinel）和自动 分区（Cluster）提供高可用性（high availability）。

*[Redis命令大全](http://www.redis.cn/commands.html)*

# [下载](http://www.redis.cn/download.html)

# [在windows上安装Redis](https://github.com/MicrosoftArchive/redis/releases)

*Redis 官方不建议在 windows 下使用 Redis，所以官网没有 windows 版本可以下载。还好微软团队维护了开源的 windows 版本，虽然只有 3.2 版本，对于普通测试使用足够了。*

安装包方式安装 Redis 服务  
下载地址：https://github.com/MicrosoftArchive/redis/releases

点击下载：  
![点击下载](https://www.redis.com.cn/wp-content/uploads/2020/03/redis-installation4-1-1.png)  
![点击下载](https://www.redis.com.cn/wp-content/uploads/2020/03/redis-installation5-1-1.png)  

您可以看到 Redis 现在已下载。

或者您也可以使用下面链接下载。

https://github.com/rgl/redis/downloads

下载完成之后双击按着引导流程安装。  
![安装1](https://www.redis.com.cn/wp-content/uploads/2020/03/redis-installation6-1-1.png)
![安装2](https://www.redis.com.cn/wp-content/uploads/2020/03/redis-installation7-1-1.png)
![安装3](https://www.redis.com.cn/wp-content/uploads/2020/03/redis-installation8-1-1.png)
![安装4](https://www.redis.com.cn/wp-content/uploads/2020/03/redis-installation9-1-1.png)
![安装5](https://www.redis.com.cn/wp-content/uploads/2020/03/redis-installation10-1-1.png)
![安装6](https://www.redis.com.cn/wp-content/uploads/2020/03/redis-installation11-1-1.png)

启动 Redis
Redis 现在可以使用了。打开 Redis 程序目录：

![Redis安装12](https://www.redis.com.cn/wp-content/uploads/2020/03/redis-installation12-1-1.png)

文件介绍：

redis-server.exe：服务端程序，提供 redis 服务

redis-cli.exe: 客户端程序，通过它连接 redis 服务并进行操作

redis-check-dump.exe：RDB 文件修复工具

redis-check-aof.exe：AOF 文件修复工具

redis-benchmark.exe：性能测试工具，用以模拟同时由 N 个客户端发送 M 个 SETs/GETs 查询 (类似于 Apache 的 ab 工具)

redis.windows.conf： 配置文件，将 redis 作为普通软件使用的配置，命令行关闭则 redis 关闭

redis.windows-service.conf：配置文件，将 redis 作为系统服务的配置

单击 redis-server.exe，启动 Redis 服务。

![Redis安装13](https://www.redis.com.cn/wp-content/uploads/2020/03/redis-installation13-1-1.png)

现在启动 Redis 客户端。

![Redis安装14](https://www.redis.com.cn/wp-content/uploads/2020/03/redis-installation14-1-1.png)  
![Redis安装15](https://www.redis.com.cn/wp-content/uploads/2020/03/redis-installation15-1-1.png)

检查 Redis 是否已连接。

使用 PING 命令。

![Redis安装16](https://www.redis.com.cn/wp-content/uploads/2020/03/redis-installation16-1-1.png)

Redis 服务窗口也输出 1 个客户端已连接。

![Redis安装17](https://www.redis.com.cn/wp-content/uploads/2020/03/redis-installation17-1-1.png)

直接解压的方式安装 redis
首先下载 redis 安装包：https://github.com/MSOpenTech/redis/releases

![下载](https://www.redis.com.cn/wp-content/uploads/2020/03/20180530232823964-e1584240924769.png)

解压安装包到相应文件夹，任何盘符都行，例如 E:\tools\redis-3.2.100。

使用命令行启动 Redis 服务
运行 cmd，cd 进入对应目录 E:\tools\redis-3.2.100，执行：

```cmd
redis-server.exe redis.windows.conf
```

*注：可以把 redis 的路径加到系统的环境变量里，这样就省得再输路径了，后面的那个 redis.windows.conf 可以省略，如果省略，会启用默认的参数。

输入之后会显示如下：

![path](https://www.redis.com.cn/wp-content/uploads/2020/03/5d84a6dd5f1b242dce37ab0423388981.png)

安装 redis 到 windows 服务  

```cmd
redis-server --service-install redis.windows.conf
```

查看 windows 服务是否加入：

![查看服务](https://www.redis.com.cn/wp-content/uploads/2020/03/2a38fe5c35c522f602e4647ef8af3d58.png)

这时候先关闭打开的第一个 cmd 窗口，然后执行以下命令启动再次 redis：

```cmd
redis-server --service-start
```

停止 redis 服务：

```cmd
redis-server --service-stop
```

最后，测试一下 redis 是否能够正常使用：

切换到 redis 目录下：E:\tools\redis-3.2.100  下：

```cmd
redis-cli.exe -h 127.0.0.1 -p 6379 
```
