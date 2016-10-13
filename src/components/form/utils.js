import React from 'react';
import wrapDisplayName from 'recompose/wrapDisplayName';

export function withStyles(styles) {
  return BaseComponent => {
    const StyledComponent = (props: Props) => (
      <BaseComponent {...props} styles={styles} />
    );
    StyledComponent.displayName = wrapDisplayName(
      BaseComponent,
      'StyledComponent'
    );
    return StyledComponent;
  };
}
