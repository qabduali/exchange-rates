import styled from 'styled-components';
import { TYPOGRAPHY } from '../consts/themes.consts';

export const P1Regular = styled.div(() => ({ ...TYPOGRAPHY.P1_400 }));
export const P1Bold = styled.div(() => ({ ...TYPOGRAPHY.P1_600 }));
export const P2Regular = styled.div(() => ({ ...TYPOGRAPHY.P2_400 }));
export const P2Bold = styled.div(() => ({ ...TYPOGRAPHY.P2_700 }));

export const H1 = styled.div(() => ({ ...TYPOGRAPHY.H1 }));
export const H2 = styled.div(() => ({ ...TYPOGRAPHY.H2 }));
export const H3 = styled.div(() => ({ ...TYPOGRAPHY.H3 }));
export const H4 = styled.div(() => ({ ...TYPOGRAPHY.H4 }));
