import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 90%;
	padding: 20px;
	margin: 15px;
	background-color: #dedede;
`;

const HeaderContainer = styled.div`
	text-align: left;
	display: flex;
	flex-direction: row;
	align-items: baseline;
`;

const Dates = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
`;

class ContestListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Wrapper>
        <HeaderContainer>
          <h1 style={{ fontSize: '65px' }}>{this.props.title}</h1>
          <h2 style={{ fontSize: '35px', leftMargin: '30px' }}>{this.props.hostName}</h2>
        </HeaderContainer>
        <h3 style={{ fontSize: '20px' }}>
Contest Site:
          {this.props.contestSite}
        </h3>
        {/* IMAGE SOON TO COME MAYBE  <img src={this.props.img} alt="cool thing" /> */}
        <Dates>
          <h4>
Start Date:
            {this.props.startDate}
          </h4>
          <h4>
End Date:
            {this.props.endDate}
          </h4>
        </Dates>
        <p>
URL:
          {this.props.postURL}
        </p>
        <p>
          <strong>Description:</strong>
          {' '}
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut bibendum urna vel suscipit dictum. Quisque tincidunt magna porta egestas mollis. Suspendisse lobortis dapibus bibendum. Donec posuere eget odio sed vehicula. Sed eget leo a diam vestibulum congue. Phasellus efficitur accumsan est at ultricies. Pellentesque posuere eros sed arcu luctus vulputate.
          {' '}
        </p>
        <ol>
          <li>
Prizes:
            {this.props.prize}
          </li>
        </ol>
        <p style={{ float: 'right' }}>
Number of people entered:
          {this.props.numContestants}
        </p>
      </Wrapper>
    );
  }
}

export default ContestListing;
