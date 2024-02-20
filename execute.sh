#!/bin/bash

# Directories
ds="dataStructures"
dp="dynamicProgramming"
bt="backtracking"

# Data Structures
staticArray="StaticArray"
bst="BinarySearchTree"
bh="BinaryHeap"

# Dynamic Programming
f="fib"

# Backtracking
guw="getUniqueWays"

eval "direction=\$$1"

cd ./$direction


eval "file_name=\$$2"

node $file_name
