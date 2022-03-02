import React from "react";

interface props {
  children: React.ReactNode;
  id?: string;
}

const Article = ({children, id}: props) => {
  return (
    <section id={id}>
      {children}
    </section>
  )
}

export default Article;