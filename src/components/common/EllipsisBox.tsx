import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import { FaAngleDown } from 'react-icons/fa';

interface Props {
  children: React.ReactNode;
  lineLimit: number;
}

const EllipsisBox: React.FC<Props> = ({ children, lineLimit }) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  return (
    <EllipsisBoxStyle
      lineLimit={lineLimit}
      $expanded={expanded}
      onClick={() => setExpanded(!expanded)}
    >
      <p>{children}</p>
      <div className="toggle">
        <Button size="small" scheme="normal">
          {expanded ? '접기' : '펼치기'} <FaAngleDown />
        </Button>
      </div>
    </EllipsisBoxStyle>
  );
};

interface EllipsisBoxStyleProps {
  lineLimit: number;
  $expanded: boolean;
}

const EllipsisBoxStyle = styled.div<EllipsisBoxStyleProps>`
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: ${({ lineLimit, $expanded }) =>
      $expanded ? 'none' : lineLimit};
    -webkit-box-orient: vertical;
    padding: 20px 0 0 0;
    margin: 0;
  }
  .toggle {
    display: flex;
    justify-content: end;
    svg {
      transform: ${({ $expanded }) =>
        $expanded ? 'rotate(180deg)' : 'rotate(0)'};
    }
  }
`;

export default EllipsisBox;
