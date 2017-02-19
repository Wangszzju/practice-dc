## 输出第四列中包含192.168.10.102的内容

awk '$4 ~ /192.168.10.102/ $6 ~ /ESTABLISHED/ {print $0}' netstat.txt

# tcp4       0      0  192.168.10.102.62562   59.111.160.195.http    ESTABLISHED
# tcp4       0      0  192.168.10.102.62560   210-140-69-74.jp.10826 ESTABLISHED
# tcp4       0      0  localhost.socks        localhost.62559        ESTABLISHED
# tcp4       0      0  localhost.62559        localhost.socks        ESTABLISHED
# tcp4       0      0  192.168.10.102.62558   210-140-69-74.jp.10826 ESTABLISHED
# tcp4       0      0  localhost.socks        localhost.62557        ESTABLISHED
# tcp4       0      0  localhost.62557        localhost.socks        ESTABLISHED
# tcp4       0      0  192.168.10.102.62554   101.226.76.164.https   ESTABLISHED
# tcp4       0      0  192.168.10.102.62553   68-233-239-136.s.http  ESTABLISHED
# tcp4       0      0  192.168.10.102.62552   58.215.145.188.http    ESTABLISHED
# tcp4       0      0  192.168.10.102.62548   124.112.127.82.http    ESTABLISHED
# tcp4       0      0  192.168.10.102.62547   124.112.127.82.http    ESTABLISHED
# tcp4       0      0  192.168.10.102.62546   124.112.127.81.http    ESTABLISHED
# tcp4       0      0  192.168.10.102.62545   124.112.127.81.http    ESTABLISHED
# tcp4       0      0  192.168.10.102.62544   122.227.164.232.http   ESTABLISHED
# tcp4       0      0  192.168.10.102.62542   hn.kd.ny.adsl.xfer     ESTABLISHED
# tcp4       0      0  192.168.10.102.62539   58.215.145.188.http    ESTABLISHED
