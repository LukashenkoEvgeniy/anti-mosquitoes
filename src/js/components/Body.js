import React from 'react';
import styled from 'styled-components'

import {InlineBlock} from '../common/Atom'

export default function Body({children}) {
    return (
        <InlineBlock>
            {children.map(
                (item, index) => <InlineBlock key={index}>{item}</InlineBlock>)
            }
        </InlineBlock>
    )
}

