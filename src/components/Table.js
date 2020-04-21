import React from 'react';
import styled from 'styled-components';

const LinkBtn = styled.a`
background-color: #38853b;
text-decoration: none;
display: block;
padding: .7rem 1.5rem;
color: #f9f9f9;
text-shadow: 1px 1px #00631b;
text-align: center;
&:hover {
  background-color: #005417;
}
`;

const Badge = styled.span`
  background-color: #2980b9;
  color: #f9f9f9;
  padding: 3px;
  font-size: 1.2rem;
  border-radius: 5px;
`;

const Table = ({indexOfFirstPost, data, loading}) => {

  if (loading)
  {
    return <h2>Loading...</h2>;
  }

  return <table>
    <tbody>
      {
        data.map((repo, i) => (
          <tr key={i}>
            <td className="m-2 py-3 w-100 text-center">
              <img height="100" width="100" src={repo.owner.avatar_url} alt={`${repo.name}'s author avatar`} />
              <LinkBtn target="__blank" href={repo.html_url}>GitHub</LinkBtn>
            </td>
            <td className="px-lg-5">
              <h4 className="mt-0"><span className="bold">#{indexOfFirstPost + (i+1)}</span> - {repo.name} | <Badge>&#9733;{repo.stargazers_count}</Badge></h4>
              {repo.description}
            </td>
          </tr>
        ))
      }
    </tbody>
    </table> 
}

export default Table;