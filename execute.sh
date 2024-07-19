#!/bin/bash

# Directories
ds="dataStructures"
dp="dynamicProgramming"
matrix="matrix"
backtracking="backtracking"
graph="graph"

# -------------------------------

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
knapsack="knapsack"
unboundedKnapsack="unboundedKnapsack"
lcs="longestCommonSubstring"

# Matrix
dfs="dfs"
bfs="bfs"

# Backtracking
subsets="subsets"
comb="combinations"
perms="permutations"

# Graph
edgesToAdj="edgesToAdjacencyList"
dijkstra="dijkstra"
prims="prims"
topSort="topSort"

# --------------------------

eval "direction=\$$1"

cd ./$direction


eval "file_name=\$$2"

node $file_name
