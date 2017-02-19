echo "请输入球员位置首字母缩写（大写）"
read player

case ${player} in 
  "PG")
    echo "Tracy McGrady"
    exit
  ;;
  "SG")
    echo "Kobe Bryant"
    exit
  ;;
  "SF")
    echo "Lebron James"
    exit
  ;;
  "PF")
    echo "Kevin Garnett"
    exit
  ;;
  "C")
    echo "Tim Duncan"
    exit
  ;;
  6)
    echo "Manu Ginobili"
    exit
  ;;
  *) echo "I can choose Manu / KD / Curry……"
esac