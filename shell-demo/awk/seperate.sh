
# # 手动分类
# echo "将localhost和192.168.10.102分开，前者输出到local.txt，后者输出到net.txt,只输出第1，4，5列，表头不管"
# awk 'FNR!=1 {if($4 ~ /localhost/) print $1,$4,$5 > "local.txt"
# else if($4 ~ /192.168.10.102/) print $1,$4,$5 > "net.txt"
# else print $1,$4,$5 > "otherAddress.txt"}' netstat.txt

# ## 整个if－else-if－else体系要用{}包起来
# ## 判断条件用()包起来
# ## > "文件名"是指要输出到那个文件名
# ## print后面是输出那几列的意思

# 自动分类
awk '{print $1,$4,$5,$6 > $6}' netstat.txt

## > 后面是某一列，要按照该列来进行分割

# 但是，怎么在每个小文件的第一行加上表头呢？
