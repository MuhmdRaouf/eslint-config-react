import type { FunctionComponent, ReactElement } from 'react';

import { InstructionTest } from './Instruction.test';

const white = '#fff';
const styles = {
  container: {
    flex: 1,
    backgroundColor: white,
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export const AppTest: FunctionComponent = (): ReactElement => (
  <div style={styles.container}>
    <InstructionTest />
  </div>
);
