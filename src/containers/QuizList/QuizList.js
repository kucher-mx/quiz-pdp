import React, { Component } from 'react';
import { getDocs, query, collection } from 'firebase/firestore';
import './QuizList.css';
import NavLink from 'react-router-dom/es/NavLink';
import Loader from '../../components/ui/Loader/Loader';
import { firestore } from '../../axios/firebase';

export default class QuizList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quizes: [],
      loading: true,
    };
  }

  async componentDidMount() {
    const response = await getDocs(query(collection(firestore, 'quizes')));

    console.log({ response });

    const quizes = response.docs.map((doc, idx) => {
      return {
        id: doc.id,
        name: `Quiz ${idx + 1}`,
      };
    });

    this.setState({
      quizes,
      loading: false,
    });
  }

  render() {
    return (
      <div className={'QuizList'}>
        <div>
          <h1>Quiz List</h1>

          {this.state.loading ? (
            <Loader />
          ) : (
            <ul className={'QuizListUl'}>{this.renderQuizes()}</ul>
          )}
        </div>
      </div>
    );
  }

  renderQuizes() {
    return this.state.quizes.map((quiz, index) => {
      return (
        <li key={quiz.id}>
          <NavLink to={'/quiz/' + quiz.id}>
            {index + 1}. {quiz.name}
          </NavLink>
        </li>
      );
    });
  }
}
