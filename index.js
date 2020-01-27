const nodes = ['a', 'b', 'c', 1, 2, 3, 4, '红', '黄', '蓝', '绿', '紫'];
const nodeGrouping = [
  { type: 'letter', member: ['a', 'b', 'c'] },
  { type: 'number', member: [1, 2, 3, 4] },
  { type: 'color', member: ['红', '黄', '蓝', '绿', '紫'] }
];
const linkageNodeParameters = [
  { quantity: -1, linkageNodes: ['a', 2, '红'] },
  { quantity: -1, linkageNodes: ['a', 3, '红'] },
  { quantity: -1, linkageNodes: ['a', 3, '绿'] },
  { quantity: -1, linkageNodes: ['a', 3, '紫'] },
  { quantity: -1, linkageNodes: ['a', 4, '黄'] },
  { quantity: -1, linkageNodes: ['a', 4, '紫'] },
  { quantity: -1, linkageNodes: ['b', 1, '红'] },
  { quantity: -1, linkageNodes: ['b', 2, '黄'] },
  { quantity: -1, linkageNodes: ['b', 2, '蓝'] },
  { quantity: -1, linkageNodes: ['b', 4, '绿'] },
  { quantity: -1, linkageNodes: ['c', 3, '黄'] },
  { quantity: -1, linkageNodes: ['c', 3, '绿'] },
  { quantity: -1, linkageNodes: ['c', 3, '紫'] },
  { quantity: -1, linkageNodes: ['c', 4, '绿'] }
];

function LinkageLibrary(nodes, nodeGrouping, linkageNodeParameters) {
  const nodeSet = new Set(nodes);
  const selectedNodes = new Set();
  const nodeLinkageNodes = new Map(); // 节点可联动的所有节点
  const {
    nodeIndex,  // 节点下标
    nodeStatus, // 节点状态
    nodeMatrix  // 节点矩阵
  } = initVertices(nodeSet);

  this.setLinkageNodes = (linkageNodeParameters) => {
    linkageNodeParameters.forEach(({ linkageNodes }) => {
      linkageNodes.forEach((node) => {
        let newAllLinkageNodes = new Set();
        if (nodeLinkageNodes.has(node)) {
          newAllLinkageNodes = new Set([
            ...nodeLinkageNodes.get(node),
            ...linkageNodes
          ]);
        } else {
          newAllLinkageNodes = new Set(linkageNodes);
        }
        newAllLinkageNodes.delete(node);
        nodeLinkageNodes.set(node, newAllLinkageNodes);
      });
    });
    console.log(nodeLinkageNodes);
  };

  if (linkageNodeParameters) {
    this.setLinkageNodes(linkageNodeParameters);
  }

  this.selectNode = (node, selected) => {
    if (selected) {
      selectedNodes.add(node);
    } else {
      selectedNodes.
    }
    
  }

  this.setNodeStatus = () => {
    nodeStatus.set(node, status);
  };

  this.getNodeStatus = () => {
    return nodeStatus;
  };
}

function initVertices(nodeSet) {
  const nodeIndex = new Map();
  const nodeStatus = new Map();
  const nodeMatrix = [];

  nodeSet.forEach((node, index) => {
    nodeIndex.set(node, index);
    nodeStatus.set(node, true);
    nodeMatrix.push(new Array(nodeSet.size));
  });

  return {
    nodeIndex,
    nodeStatus,
    nodeMatrix
  };
}

const a = new LinkageLibrary(nodes, nodeGrouping, linkageNodeParameters);
a.selectNode('红', true);
console.log(a.getNodeStatus());

// export default LinkageLibrary;