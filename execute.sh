#!/bin/bash
ds="dataStructures"

eval "direction=\$$1"

cd ./$direction

bst="BinarySearchTree"

eval "file_name=\$$2"

node $file_name
