#!/bin/zsh

# 字符串
my_name="mdzz"
my_signal="苟利国家生死以，岂因祸福避趋之"
echo "除了${my_name}也没啥好说的了"
echo ${my_name:0:3}
echo ${#my_signal}
echo "${my_name:2:4} + ${#my_signal}"

# 数组和循环
pg_name="组织后卫:Lebron James"
my_favorite_startup=(${pg_name} "得分后卫:Kobe Bryant" "小前锋:Kevin Durant" "大前锋:Kevin Garnett" "中锋:Tim Duncan" "")
for person in $my_favorite_startup
do 
  echo "我选择了${person}"
done
# echo ${my_favorite_startup[*]}


# 条件
if [ ${#my_name}==4 ]  # 注意[]要加空格
then
  echo "my_name长度确实为4"
fi

# 环境变量
echo "Now the User is $USER "

# 关系运算

# # 交互
echo "请输入姓"
read lname
echo "请输入名"
read fname
echo "Hello ${fname} ${lname}"
