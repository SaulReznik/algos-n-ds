#!/bin/bash

# Directories
ds="dataStructures"
dp="dynamicProgramming"
matrix="matrix"

# Data Structures
staticArray="StaticArray"
bst="BinarySearchTree"
bh="BinaryHeap"
g="graph"

# Dynamic Programming
f="fib"

# Matrix
dfs="dfs"
bfs="bfs"

eval "direction=\$$1"

cd ./$direction


eval "file_name=\$$2"

node $file_name
