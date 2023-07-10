import React from "react";
import Button2 from "../components/Button2";

function Blogs() {
  const blogLists = [
    {
      title: "Backtracking Algorithm Made Simple",
      content:
        "Backtracking, commonly described as a “depth-first search”  algorithm, involves exploring all possible solutions by going as deep as possible along each branch before “backtracking” and trying a different path.",
      link: "https://ndindacodes.substack.com/p/backtracking-algorithm-made-simple",
    },
    {
      title: "What is Recursion? — Definition & Examples",
      content:
        "Recursion is a topic that is not easy to wrap your head around on the first encounter and it might not make sense. Do not give up if you struggle with the concept.",
      link: "https://medium.com/@dnyamai.dn/what-is-recursion-definition-examples-efdedb2024c4",
    },
    {
      title: "Simplify Your Coding Life: Essential VSCode Keyboard Shortcuts",
      content:
        "Efficiency and productivity are the lifeblood of any programmer. In the world of coding, where every minute detail can make a difference, finding ways to streamline your workflow becomes paramount.",
      link: "https://medium.com/@dnyamai.dn/simplify-your-coding-life-essential-vscode-keyboard-shortcuts-a37f94a476b3",
    },
  ];
  return (
    <div className="mainBlogContainer">
      <h1 className="animate__animated animate__backInDown">My Articles</h1>
    <div className="blogContainer animate__animated animate__zoomIn">
      
      {blogLists.map((blog, index) => (
        <div key={index} className="blogCard">
          <div className="blogBox">
            <div className="blogContent">
              <span className="blogTitle">{blog.title}</span>
              <p>{blog.content}</p>
              <Button2 name="Read More" link={blog.link} />
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default Blogs;
