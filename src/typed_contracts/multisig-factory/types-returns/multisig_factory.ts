import type BN from 'bn.js';
import type {ReturnNumber} from '@727-ventures/typechain-types';

export type Hash = string | number[]

export enum Error {
	instantiationFailed = 'InstantiationFailed'
}

export enum LangError {
	couldNotReadInput = 'CouldNotReadInput'
}

export type AccountId = string | number[]

