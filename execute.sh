#!/bin/bash

# Directories
ds="dataStructures"
dp="dynamicProgramming"

# Data Structures
staticArray="StaticArray"
bst="BinarySearchTree"

# Dynamic Programming
f="fib"

eval "direction=\$$1"

cd ./$direction


eval "file_name=\$$2"

node $file_name
