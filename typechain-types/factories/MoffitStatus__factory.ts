/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../common";
import type { MoffitStatus, MoffitStatusInterface } from "../MoffitStatus";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "doeLibrary",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "haasLibrary",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "mainStacks",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "moffitFloor1",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "moffitFloor3",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "moffitFloor4",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "moffitFloor5",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_doeLibrary",
        type: "uint256",
      },
    ],
    name: "setDoeLibrary",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_haasLibrary",
        type: "uint256",
      },
    ],
    name: "setHaasLibrary",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_mainStacks",
        type: "uint256",
      },
    ],
    name: "setMainStacks",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_moffitFloor1",
        type: "uint256",
      },
    ],
    name: "setMoffitFloor1",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_moffitFloor3",
        type: "uint256",
      },
    ],
    name: "setMoffitFloor3",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_moffitFloor4",
        type: "uint256",
      },
    ],
    name: "setMoffitFloor4",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_moffitFloor5",
        type: "uint256",
      },
    ],
    name: "setMoffitFloor5",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604052348015600f57600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506106bf8061005f6000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c8063a199daaf11610097578063d08c07a211610066578063d08c07a21461023c578063d39dd9ff1461025a578063d8758e6414610276578063ede9003d14610292576100f5565b8063a199daaf146101c6578063a74f37b5146101e4578063b75d266e14610202578063bad93e391461021e576100f5565b8063525bed7b116100d3578063525bed7b14610152578063811e93941461016e5780638da5cb5b1461018a578063998c1375146101a8576100f5565b80633980466f146100fa5780633c5f1544146101165780633c6de19e14610134575b600080fd5b610114600480360381019061010f9190610559565b6102ae565b005b61011e6102fc565b60405161012b9190610595565b60405180910390f35b61013c610302565b6040516101499190610595565b60405180910390f35b61016c60048036038101906101679190610559565b610308565b005b61018860048036038101906101839190610559565b610356565b005b6101926103a4565b60405161019f91906105f1565b60405180910390f35b6101b06103c8565b6040516101bd9190610595565b60405180910390f35b6101ce6103ce565b6040516101db9190610595565b60405180910390f35b6101ec6103d4565b6040516101f99190610595565b60405180910390f35b61021c60048036038101906102179190610559565b6103da565b005b610226610428565b6040516102339190610595565b60405180910390f35b61024461042e565b6040516102519190610595565b60405180910390f35b610274600480360381019061026f9190610559565b610434565b005b610290600480360381019061028b9190610559565b610482565b005b6102ac60048036038101906102a79190610559565b6104d0565b005b60058111156102f2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102e990610669565b60405180910390fd5b8060038190555050565b60025481565b60055481565b600581111561034c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161034390610669565b60405180910390fd5b8060048190555050565b600581111561039a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161039190610669565b60405180910390fd5b8060018190555050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60075481565b60045481565b60035481565b600581111561041e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161041590610669565b60405180910390fd5b8060068190555050565b60065481565b60015481565b6005811115610478576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161046f90610669565b60405180910390fd5b8060078190555050565b60058111156104c6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104bd90610669565b60405180910390fd5b8060028190555050565b6005811115610514576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161050b90610669565b60405180910390fd5b8060058190555050565b600080fd5b6000819050919050565b61053681610523565b811461054157600080fd5b50565b6000813590506105538161052d565b92915050565b60006020828403121561056f5761056e61051e565b5b600061057d84828501610544565b91505092915050565b61058f81610523565b82525050565b60006020820190506105aa6000830184610586565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006105db826105b0565b9050919050565b6105eb816105d0565b82525050565b600060208201905061060660008301846105e2565b92915050565b600082825260208201905092915050565b7f5363616c652073686f756c6420626520312d3500000000000000000000000000600082015250565b600061065360138361060c565b915061065e8261061d565b602082019050919050565b6000602082019050818103600083015261068281610646565b905091905056fea2646970667358221220005edd4d4b6efe1c215cc82770ff4049ce6826be89c70fc69ed3304f4f865b2164736f6c634300081b0033";

type MoffitStatusConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MoffitStatusConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MoffitStatus__factory extends ContractFactory {
  constructor(...args: MoffitStatusConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      MoffitStatus & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): MoffitStatus__factory {
    return super.connect(runner) as MoffitStatus__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MoffitStatusInterface {
    return new Interface(_abi) as MoffitStatusInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): MoffitStatus {
    return new Contract(address, _abi, runner) as unknown as MoffitStatus;
  }
}
