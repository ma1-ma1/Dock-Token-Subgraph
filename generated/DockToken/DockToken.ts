// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Approval extends ethereum.Event {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get spender(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class DockToken extends ethereum.SmartContract {
  static bind(address: Address): DockToken {
    return new DockToken("DockToken", address);
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  approve(_spender: Address, _value: BigInt): boolean {
    let result = super.call("approve", "approve(address,uint256):(bool)", [
      ethereum.Value.fromAddress(_spender),
      ethereum.Value.fromUnsignedBigInt(_value)
    ]);

    return result[0].toBoolean();
  }

  try_approve(_spender: Address, _value: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("approve", "approve(address,uint256):(bool)", [
      ethereum.Value.fromAddress(_spender),
      ethereum.Value.fromUnsignedBigInt(_value)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", "totalSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalSupply", "totalSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  transferFrom(from: Address, to: Address, value: BigInt): boolean {
    let result = super.call(
      "transferFrom",
      "transferFrom(address,address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(from),
        ethereum.Value.fromAddress(to),
        ethereum.Value.fromUnsignedBigInt(value)
      ]
    );

    return result[0].toBoolean();
  }

  try_transferFrom(
    from: Address,
    to: Address,
    value: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "transferFrom",
      "transferFrom(address,address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(from),
        ethereum.Value.fromAddress(to),
        ethereum.Value.fromUnsignedBigInt(value)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  INITIAL_SUPPLY(): BigInt {
    let result = super.call("INITIAL_SUPPLY", "INITIAL_SUPPLY():(uint256)", []);

    return result[0].toBigInt();
  }

  try_INITIAL_SUPPLY(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "INITIAL_SUPPLY",
      "INITIAL_SUPPLY():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  decimals(): i32 {
    let result = super.call("decimals", "decimals():(uint8)", []);

    return result[0].toI32();
  }

  try_decimals(): ethereum.CallResult<i32> {
    let result = super.tryCall("decimals", "decimals():(uint8)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  transferEnabled(): boolean {
    let result = super.call("transferEnabled", "transferEnabled():(bool)", []);

    return result[0].toBoolean();
  }

  try_transferEnabled(): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "transferEnabled",
      "transferEnabled():(bool)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  tokenOfferingAddr(): Address {
    let result = super.call(
      "tokenOfferingAddr",
      "tokenOfferingAddr():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_tokenOfferingAddr(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "tokenOfferingAddr",
      "tokenOfferingAddr():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  decreaseApproval(_spender: Address, _subtractedValue: BigInt): boolean {
    let result = super.call(
      "decreaseApproval",
      "decreaseApproval(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(_spender),
        ethereum.Value.fromUnsignedBigInt(_subtractedValue)
      ]
    );

    return result[0].toBoolean();
  }

  try_decreaseApproval(
    _spender: Address,
    _subtractedValue: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "decreaseApproval",
      "decreaseApproval(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(_spender),
        ethereum.Value.fromUnsignedBigInt(_subtractedValue)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  balanceOf(_owner: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(_owner)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(_owner: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(_owner)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  adminAddr(): Address {
    let result = super.call("adminAddr", "adminAddr():(address)", []);

    return result[0].toAddress();
  }

  try_adminAddr(): ethereum.CallResult<Address> {
    let result = super.tryCall("adminAddr", "adminAddr():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  transfer(to: Address, value: BigInt): boolean {
    let result = super.call("transfer", "transfer(address,uint256):(bool)", [
      ethereum.Value.fromAddress(to),
      ethereum.Value.fromUnsignedBigInt(value)
    ]);

    return result[0].toBoolean();
  }

  try_transfer(to: Address, value: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("transfer", "transfer(address,uint256):(bool)", [
      ethereum.Value.fromAddress(to),
      ethereum.Value.fromUnsignedBigInt(value)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  increaseApproval(_spender: Address, _addedValue: BigInt): boolean {
    let result = super.call(
      "increaseApproval",
      "increaseApproval(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(_spender),
        ethereum.Value.fromUnsignedBigInt(_addedValue)
      ]
    );

    return result[0].toBoolean();
  }

  try_increaseApproval(
    _spender: Address,
    _addedValue: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "increaseApproval",
      "increaseApproval(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(_spender),
        ethereum.Value.fromUnsignedBigInt(_addedValue)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  allowance(_owner: Address, _spender: Address): BigInt {
    let result = super.call(
      "allowance",
      "allowance(address,address):(uint256)",
      [ethereum.Value.fromAddress(_owner), ethereum.Value.fromAddress(_spender)]
    );

    return result[0].toBigInt();
  }

  try_allowance(
    _owner: Address,
    _spender: Address
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "allowance",
      "allowance(address,address):(uint256)",
      [ethereum.Value.fromAddress(_owner), ethereum.Value.fromAddress(_spender)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  TOKEN_OFFERING_ALLOWANCE(): BigInt {
    let result = super.call(
      "TOKEN_OFFERING_ALLOWANCE",
      "TOKEN_OFFERING_ALLOWANCE():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_TOKEN_OFFERING_ALLOWANCE(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "TOKEN_OFFERING_ALLOWANCE",
      "TOKEN_OFFERING_ALLOWANCE():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  ADMIN_ALLOWANCE(): BigInt {
    let result = super.call(
      "ADMIN_ALLOWANCE",
      "ADMIN_ALLOWANCE():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_ADMIN_ALLOWANCE(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "ADMIN_ALLOWANCE",
      "ADMIN_ALLOWANCE():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ApproveCall extends ethereum.Call {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get _spender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _value(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get value(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class DecreaseApprovalCall extends ethereum.Call {
  get inputs(): DecreaseApprovalCall__Inputs {
    return new DecreaseApprovalCall__Inputs(this);
  }

  get outputs(): DecreaseApprovalCall__Outputs {
    return new DecreaseApprovalCall__Outputs(this);
  }
}

export class DecreaseApprovalCall__Inputs {
  _call: DecreaseApprovalCall;

  constructor(call: DecreaseApprovalCall) {
    this._call = call;
  }

  get _spender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _subtractedValue(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class DecreaseApprovalCall__Outputs {
  _call: DecreaseApprovalCall;

  constructor(call: DecreaseApprovalCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class SetTokenOfferingCall extends ethereum.Call {
  get inputs(): SetTokenOfferingCall__Inputs {
    return new SetTokenOfferingCall__Inputs(this);
  }

  get outputs(): SetTokenOfferingCall__Outputs {
    return new SetTokenOfferingCall__Outputs(this);
  }
}

export class SetTokenOfferingCall__Inputs {
  _call: SetTokenOfferingCall;

  constructor(call: SetTokenOfferingCall) {
    this._call = call;
  }

  get offeringAddr(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amountForSale(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class SetTokenOfferingCall__Outputs {
  _call: SetTokenOfferingCall;

  constructor(call: SetTokenOfferingCall) {
    this._call = call;
  }
}

export class TransferCall extends ethereum.Call {
  get inputs(): TransferCall__Inputs {
    return new TransferCall__Inputs(this);
  }

  get outputs(): TransferCall__Outputs {
    return new TransferCall__Outputs(this);
  }
}

export class TransferCall__Inputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class TransferCall__Outputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class IncreaseApprovalCall extends ethereum.Call {
  get inputs(): IncreaseApprovalCall__Inputs {
    return new IncreaseApprovalCall__Inputs(this);
  }

  get outputs(): IncreaseApprovalCall__Outputs {
    return new IncreaseApprovalCall__Outputs(this);
  }
}

export class IncreaseApprovalCall__Inputs {
  _call: IncreaseApprovalCall;

  constructor(call: IncreaseApprovalCall) {
    this._call = call;
  }

  get _spender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _addedValue(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class IncreaseApprovalCall__Outputs {
  _call: IncreaseApprovalCall;

  constructor(call: IncreaseApprovalCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class EnableTransferCall extends ethereum.Call {
  get inputs(): EnableTransferCall__Inputs {
    return new EnableTransferCall__Inputs(this);
  }

  get outputs(): EnableTransferCall__Outputs {
    return new EnableTransferCall__Outputs(this);
  }
}

export class EnableTransferCall__Inputs {
  _call: EnableTransferCall;

  constructor(call: EnableTransferCall) {
    this._call = call;
  }
}

export class EnableTransferCall__Outputs {
  _call: EnableTransferCall;

  constructor(call: EnableTransferCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get admin(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}
