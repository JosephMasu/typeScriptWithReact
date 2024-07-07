import React from "react";

type ProfileCardProps = {
  type: 'basic' | 'advanced';
  name: string;
  email?: string;
};
function Component(props: ProfileCardProps) {
  const {type, name, email} = props;
  const alertType = type === 'advanced'?'success': 'danger';
  const className = `alert alert-${alertType}`;
  return (
    <article className={className}>
      <h2>user: {name}</h2>
      {email && <h2>email: {email}</h2>}
    </article>
  );
}
export default Component;
