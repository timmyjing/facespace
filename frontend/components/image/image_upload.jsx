import React from 'react';
import ActiveStorageProvider from 'react-activestorage-provider';

const ImageUpload = props => (
<ActiveStorageProvider
  endpoint={props.endpoint}
  onSubmit={props.onSubmit}
  render={({ handleUpload, uploads, ready }) => (
    <div>
      <input
        type="file"
        disabled={!ready}
        onChange={e => handleUpload(e.currentTarget.files)}
      />

      {uploads.map(
        upload =>
          upload.state === 'waiting' ? (
            <p key={upload.id}>Waiting to upload {upload.file.name}</p>
          ) : upload.state === 'uploading' ? (
            <p key={upload.id}>
              Uploading {upload.file.name}: {upload.progress}%
            </p>
          ) : upload.state === 'error' ? (
            <p key={upload.id}>
              Error uploading {upload.file.name}: {upload.error}
            </p>
          ) : (
            <p key={upload.id}>Finished uploading {upload.file.name}</p>
          )
      )}
    </div>
  )}
/>);

export default ImageUpload;