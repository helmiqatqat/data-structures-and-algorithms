'use strict';
const {Node, BinaryTree} = require('./Library');

const n11 = new Node(150);
const n12 = new Node(100);
const n13 = new Node(250);
const n14 = new Node(75);
const n15 = new Node(160);
const n16 = new Node(200);
const n17 = new Node(350);
const n18 = new Node(125);
const n19 = new Node(175);
const n110 = new Node(300);
const n111 = new Node(500);

n11.left = n12;
n11.right = n13;
n12.left = n14;
n12.right = n15;
n13.left = n16;
n13.right = n17;
n15.left = n18;
n16.right = n19;
n17.left = n110;
n17.right = n111;

const n21 = new Node(42);
const n22 = new Node(100);
const n23 = new Node(600);
const n24 = new Node(15);
const n25 = new Node(160);
const n26 = new Node(200);
const n27 = new Node(350);
const n28 = new Node(125);
const n29 = new Node(175);
const n210 = new Node(4);
const n211 = new Node(500);

n21.left = n22;
n21.right = n23;
n22.left = n24;
n22.right = n25;
n23.left = n26;
n23.right = n27;
n25.left = n28;
n26.right = n29;
n27.left = n210;
n27.right = n211;

module.exports = {
  bt_1: new BinaryTree(n11),
  bt_2: new BinaryTree(n21)
};
