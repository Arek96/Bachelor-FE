import React from "react";

import { NodeSvgWrapper } from "./NodeStyles";
import {
  NodeType,
  Machine
} from "../../simulationsData/producer/producerSimulation";
import { HierarchyNode } from "d3-hierarchy";

interface INodeProps {
  node: HierarchyNode<Machine>;
  onClick?: () => void;
}

export const Node: React.FC<INodeProps> = ({ node }) => {
  const machineIcon = (
    <NodeSvgWrapper fill="#808080">
      <rect fill="#FFF" width={62} height={62} />
      <path d="M32,43a15.862,15.862,0,0,0,10.856-4.264c.009-.008.017-.017.025-.025l.01-.01a15.957,15.957,0,0,0,4.192-17.034c-.006-.016-.014-.031-.02-.047l-.007-.017A16.013,16.013,0,0,0,37.1,11.858,6.038,6.038,0,0,0,34.405,9.5,1,1,0,0,0,33,10.41v4.176l-1,1-1-1V10.41A1,1,0,0,0,29.6,9.5a6.039,6.039,0,0,0-2.687,2.351A15.991,15.991,0,0,0,32,43Zm-5.5-8a.5.5,0,0,1,0-1H28a1,1,0,0,0,0-2H26.5a.5.5,0,0,1,0-1H28a1,1,0,0,0,0-2H26.5a.5.5,0,0,1,0-1H28a1,1,0,0,0,0-2H26.5a.5.5,0,0,1,0-1H40V35Zm7.231,2a2,2,0,0,1-3.462,0ZM36,22h.465l.667,1H36Zm6,14.756V23h3.4A13.844,13.844,0,0,1,42,36.756ZM44.635,21H41a1,1,0,0,0-1,1v1h-.465l-1.7-2.555A1,1,0,0,0,37,20H36v-.529A6.038,6.038,0,0,0,38,15a5.885,5.885,0,0,0-.048-.652A14.029,14.029,0,0,1,44.635,21ZM29.293,15.707l2,2a1,1,0,0,0,1.414,0l2-2A1,1,0,0,0,35,15V12.356a4,4,0,0,1-.6,5.845,1,1,0,0,0-.4.8v4H30V19a1,1,0,0,0-.4-.8,4,4,0,0,1-.6-5.845V15A1,1,0,0,0,29.293,15.707Zm-3.245-1.364A5.975,5.975,0,0,0,26,15a6.038,6.038,0,0,0,2,4.471V23H26.5A2.5,2.5,0,0,0,24,25.5a2.471,2.471,0,0,0,.513,1.5,2.449,2.449,0,0,0,0,3,2.449,2.449,0,0,0,0,3A2.471,2.471,0,0,0,24,34.5,2.5,2.5,0,0,0,26.5,37h1.642a3.981,3.981,0,0,0,7.716,0H40v1a.985.985,0,0,0,.088.4A13.873,13.873,0,0,1,32,41a13.991,13.991,0,0,1-5.952-26.657Z" />
      <path d="M8,32h3.6a20.827,20.827,0,0,0,2.446,5.888l-2.552,2.544a1,1,0,0,0,0,1.415l5.66,5.66a1,1,0,0,0,.707.293h0a1,1,0,0,0,.707-.294l2.543-2.551A20.842,20.842,0,0,0,27,47.4V51a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V47.4a20.842,20.842,0,0,0,5.889-2.446l2.543,2.551a1,1,0,0,0,.707.294h0a1,1,0,0,0,.707-.293l5.66-5.66a1,1,0,0,0,0-1.415l-2.552-2.544A20.827,20.827,0,0,0,52.4,32H56a1,1,0,0,0,1-1V23a1,1,0,0,0-1-1H52.4a20.76,20.76,0,0,0-2.446-5.889l2.552-2.543a1,1,0,0,0,0-1.415l-5.66-5.66A1,1,0,0,0,46.14,6.2h0a1,1,0,0,0-.707.294L42.889,9.046A20.84,20.84,0,0,0,37,6.6V3a1,1,0,0,0-1-1H28a1,1,0,0,0-1,1V6.6a20.84,20.84,0,0,0-5.889,2.446L18.568,6.494a1,1,0,0,0-.707-.294h0a1,1,0,0,0-.707.293l-5.66,5.66a1,1,0,0,0,0,1.415l2.552,2.543A20.76,20.76,0,0,0,11.6,22H8a1,1,0,0,0-1,1v8A1,1,0,0,0,8,32Zm1-8h3.4a1,1,0,0,0,.981-.8,18.81,18.81,0,0,1,2.773-6.677,1,1,0,0,0-.128-1.261l-2.411-2.4,4.244-4.243,2.4,2.41a1,1,0,0,0,1.259.128A18.893,18.893,0,0,1,28.2,8.38,1,1,0,0,0,29,7.4V4h6V7.4a1,1,0,0,0,.8.98,18.893,18.893,0,0,1,6.679,2.774,1,1,0,0,0,1.259-.128l2.4-2.41,4.244,4.243-2.411,2.4a1,1,0,0,0-.128,1.261A18.81,18.81,0,0,1,50.619,23.2a1,1,0,0,0,.981.8H55v6H51.6a1,1,0,0,0-.98.8,18.869,18.869,0,0,1-2.774,6.678,1,1,0,0,0,.128,1.26l2.411,2.4-4.244,4.243-2.4-2.41a1,1,0,0,0-1.259-.128A18.839,18.839,0,0,1,35.8,45.62a1,1,0,0,0-.8.98V50H29V46.6a1,1,0,0,0-.8-.98,18.839,18.839,0,0,1-6.678-2.774,1,1,0,0,0-1.259.128l-2.4,2.41-4.244-4.243,2.411-2.4a1,1,0,0,0,.128-1.26A18.869,18.869,0,0,1,13.38,30.8a1,1,0,0,0-.98-.8H9Z" />
      <path d="M61.316,54.051l-6-2a1,1,0,0,0-.632,0L51.838,53H26V51a1,1,0,0,0-1-1H8A6,6,0,0,0,8,62H25a1,1,0,0,0,1-1V59H51.838l2.846.949a1,1,0,0,0,.632,0l6-2A1,1,0,0,0,62,57V55A1,1,0,0,0,61.316,54.051ZM24,60H8a4,4,0,0,1,0-8H24v8Zm36-3.721-5,1.667-2.684-.895A1,1,0,0,0,52,57H26V55H52a1,1,0,0,0,.316-.051L55,54.054l5,1.667Z" />
      <path d="M21,57H7a1,1,0,0,1,0-2H21a1,1,0,0,1,0,2Z" />
    </NodeSvgWrapper>
  );

  const inputBufferIcon = (
    <circle r={15} stroke="#808080" strokeWidth="2" fill="#FFF" />
  );

  const nodesIcons = {
    [NodeType.machine]: machineIcon,
    [NodeType.inputBuffer]: inputBufferIcon,
    [NodeType.outputBuffer]: inputBufferIcon
  };

  return nodesIcons[node.data.type];
};
