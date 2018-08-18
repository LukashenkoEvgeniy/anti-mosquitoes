import React from 'react';
import styled from 'styled-components'

import {H1} from '../common/Atom'

export default function Header({children}) {
    return (
        <H1>{children}</H1>
    )
}
