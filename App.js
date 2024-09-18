import React, { useState } from 'react';
import './App.css';

function App() {
  const [postType, setPostType] = useState('question');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');
  const [abstract, setAbstract] = useState('');
  const [successMessage, setSuccessMessage] = useState(''); // State for success message

  const handlePostTypeChange = (event) => {
    setPostType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Title:', title);
    console.log('Description:', description);
    console.log('Tags:', tags);
    console.log('Post Type:', postType);
    setSuccessMessage('Successfully Submitted!'); // Set success message
  };

  return (
    <div className="App">
      <h1>New Post</h1>

      <form onSubmit={handleSubmit}>
        <div className="post-type">
          <label>Select Post Type: </label>
          <input
            type="radio"
            value="question"
            checked={postType === 'question'}
            onChange={handlePostTypeChange}
          />
          <label>Question</label>

          <input
            type="radio"
            value="article"
            checked={postType === 'article'}
            onChange={handlePostTypeChange}
          />
          <label>Article</label>
        </div>

        {postType === 'question' ? (
          <>
            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                placeholder="Start your question with how, what, why, etc."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Description</label>
              <textarea
                placeholder="Describe your problem"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
          </>
        ) : (
          <>
            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                placeholder="Enter a descriptive title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Abstract</label>
              <textarea
                placeholder="Enter a 1-paragraph abstract"
                value={abstract}
                onChange={(e) => setAbstract(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Article Text</label>
              <textarea
                placeholder="Enter the article text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
          </>
        )}

        <div className="form-group">
          <label>Tags</label>
          <input
            type="text"
            placeholder="Please add up to 3 tags to describe what your post is about e.g., Java"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            required
          />
        </div>

        <button type="submit">Post</button>
      </form>

      {/* Success Message */}
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
}

export default App;
