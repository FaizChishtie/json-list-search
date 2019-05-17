import { List, Image } from '@stardust-ui/react';
import { useBooleanKnob } from '@stardust-ui/docs-components';
import { IItem } from './Searchable';

import React from 'react';
  
interface IListProps{
  items: IItem[]
}

const Listable = (props: IListProps) => {
  const [debug] = useBooleanKnob({name: 'debug'});

  return <List debug={debug} items={props.items} />
}

export default Listable;