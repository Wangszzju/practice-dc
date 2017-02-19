# # 求和
#   ## 求和
# val=`expr 3 + 2`
# echo "求和：3 ＋ 2 ＝ ${val}" 
# product=`expr 3 \* 2`
# echo "求积：3 * 2 = ${product}"
# product2=$((9 * 6))
# echo "Mac的shell求积：9 * 6 = ${product2}"

#   ## 等于或者不等于
# read a
# read b
# if [ $a != $b ] 
#   ## 注意这里不要用zsh来解释，会报错 
#   ## 注意条件表达式必须放在方括号之间，必须有空格
# then
#    echo "a 不等于 b"
# else echo "a（${a}） 等于 b（${b}）"
# fi

# # 关系运算符
# read c
# read d
# if [ $c -lt $d ] 
#   then echo "${c}比${d}要小"
# elif [ $c -gt $d ] 
#   then  echo "${c}比${d}要大"
# elif [ $c -eq $d ] 
#   then echo "${c}和${d}相等"
# fi

# # 布尔运算符
#   # 或运算
# read e
# read f 
# if [ $e -lt 20 -a $f -gt 0 ] ## 这里只有一个[]
# then echo "${e}小于20而且${e}大于0"
# fi

# if [ $e -gt 10 -o $f -gt 10 ]
# then echo "${e}和${f}其中有一个大于10成立"
# fi

# # 逻辑运算符
#   ## 其实和或／与运算差不太多
# g=10
# i=20

# echo "判断条件：${g}小于100 && ${i}大于100"
# if [[ $g -lt 100 && $i -gt 100 ]] ## 注意到有两个[]
# then
#    echo "返回 true"
# else
#    echo "返回 false"
# fi
# echo "判断条件：${g}小于100 || ${i}大于100"
# if [[ $g -lt 100 || $i -gt 100 ]]
# then
#    echo "返回 true"
# else
#    echo "返回 false"
# fi

# 文件测试
if [ -w ./var.sh ]
then 
  echo "var.sh文件可写"
else 
  echo "var.sh文件不可写"
fi

if [ -r ./var.sh ]
then 
  echo "var.sh文件可读"
else 
  echo "var.sh文件不可读"
fi

if [ -x ./unexe.sh ]
then 
  echo "unexe.sh文件可执行"
else 
  echo "unexe.sh文件不可执行"
fi

if [ -d . ]
then 
  echo "是个目录"
else 
  echo "不是个目录"
fi
