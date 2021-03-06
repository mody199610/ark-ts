/**
 * @module model
 */
/** Block model. */

import { JsonProperty } from 'json-typescript-mapper';

export class Block {
  @JsonProperty('id')
  id: number;

  @JsonProperty('version')
  version: number;

  @JsonProperty('timestamp')
  timestamp: number;

  @JsonProperty('height')
  height: number;

  @JsonProperty('previousBlock')
  previousBlock: number;

  @JsonProperty('numberOfTransactions')
  numberOfTransactions: number;

  @JsonProperty('totalAmount')
  totalAmount: number;

  @JsonProperty('totalFee')
  totalFee: number;

  @JsonProperty('reward')
  reward: number;

  @JsonProperty('payloadLength')
  payloadLength: number;

  @JsonProperty('payloadHash')
  payloadHash: string;

  @JsonProperty('generatorPublicKey')
  generatorPublicKey: string;

  @JsonProperty('generatorId')
  generatorId: string;

  @JsonProperty('blockSignature')
  blockSignature: string;

  @JsonProperty('confirmations')
  confirmations: number;

  @JsonProperty('totalForged')
  totalForged: string;

  constructor() {
    this.version = void 0;
    this.blockSignature = void 0;
    this.confirmations = void 0;
    this.generatorId = void 0;
    this.generatorPublicKey = void 0;
    this.generatorId = void 0;
    this.height = void 0;
    this.id = void 0;
    this.numberOfTransactions = void 0;
    this.payloadHash = void 0;
    this.payloadLength = void 0;
    this.previousBlock = void 0;
    this.reward = void 0;
    this.timestamp = void 0;
    this.totalAmount = void 0;
    this.totalFee = void 0;
    this.totalForged = void 0;
  }
}

export class BlockQueryParams {
  id: string;
}

export class BlockResponse {
  @JsonProperty('success')
  success: boolean;

  @JsonProperty({clazz: Block, name: 'blocks'})
  blocks?: Block[];

  @JsonProperty({clazz: Block, name: 'block'})
  block?: Block;

  constructor() {
    this.success = void 0;
    this.blocks = void 0;
    this.block = void 0;
  }
}

export class BlockFee {
  @JsonProperty('success')
  success: boolean;

  @JsonProperty('fee')
  fee: number;

  constructor() {
    this.success = void 0;
    this.fee = void 0;
  }
}

export class Fees {
  @JsonProperty('send')
  send: number;

  @JsonProperty('vote')
  vote: number;

  @JsonProperty('secondsignature')
  secondsignature: number;

  @JsonProperty('delegate')
  delegate: number;

  @JsonProperty('multisignature')
  multisignature: number;

  constructor() {
    this.send = void 0;
    this.vote = void 0;
    this.secondsignature = void 0;
    this.delegate = void 0;
    this.multisignature = void 0;
  }
}

export class BlockFees {
  @JsonProperty('success')
  success: boolean;

  @JsonProperty({clazz: Fees, name: 'fees'})
  fees: Fees;

  constructor() {
    this.success = void 0;
    this.fees = void 0;
  }
}

export class BlockHeight {
  @JsonProperty('success')
  success: boolean;

  @JsonProperty('height')
  height: number;

  @JsonProperty('id')
  id: number;

  constructor() {
    this.success = void 0;
    this.height = void 0;
    this.id = void 0;
  }
}
