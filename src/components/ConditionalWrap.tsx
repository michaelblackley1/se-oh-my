import React from 'react';

export interface ConditionalWrapProps {
    condition: boolean;
    children: React.ReactElement;
    wrap: (children: React.ReactElement) => JSX.Element;
}

const ConditionalWrap = ({ condition, wrap, children }: ConditionalWrapProps) =>
    condition ? wrap(children) : children;

export default ConditionalWrap;
