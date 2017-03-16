#!/bin/bash

visitCount(){
  echo "请输入要访问的接口：搜索／筛选／更新？"
  read interface
  
  case $interface in
    "筛选") grep -c "ANGELS-RETRIEVE-CONDITION" angel.back.log
    ;;
    "搜索") grep -c "ANGEL-SEARCH" angel.back.log
    ;;
    "更新") grep -c "ANGEL-STATUS-UPDATE" angel.back.log
    ;;
    *) echo "请输入正确值"
    exit
    ;;
  esac
}
if test ./angel.back.log
then
  visitCount
else
  echo "没有日志文件"
fi
