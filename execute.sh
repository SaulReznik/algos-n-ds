#!/bin/bash

# Directories
ds="dataStructures"
dp="dynamicProgramming"
matrix="matrix"
backtracking="backtracking"

# Data Structures
staticArray="StaticArray"
bst="BinarySearchTree"
bh="BinaryHeap"
graph="graph"
trie="Trie"
segmentTree="SegmentTree"
medianFinder="MedianFinder"

# Dynamic Programming
f="fib"

# Matrix
dfs="dfs"
bfs="bfs"

# Backtracking
subsets="subsets"
comb="combinations"
perms="permutations"

eval "direction=\$$1"

cd ./$direction


eval "file_name=\$$2"

node $file_name
