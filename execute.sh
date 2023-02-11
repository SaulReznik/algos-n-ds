#!/bin/bash
ds="dataStructures"
dp="dynamicProgramming"

eval "direction=\$$1"

cd ./$direction

bst="BinarySearchTree"
f="fib"

eval "file_name=\$$2"

node $file_name
