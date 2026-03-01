"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Instagram } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface InstaPost {
  id: string;
  title: string;
  views: string;
  imageUrl: string;
  postUrl: string;
}

// 15 Dummy layout items looping the 3 real Instagram urls provided
const INSTAGRAM_POSTS: InstaPost[] = [
  {
    id: "1",
    title: "Cultural Surprises: Croatia",
    views: "1.2M Views",
    imageUrl: "https://images.unsplash.com/photo-1555921015-5532091f6026?w=800&q=80",
    postUrl: "https://www.instagram.com/reel/DQfEfVDgsct/",
  },
  {
    id: "2",
    title: "Cultural Surprises: Albania",
    views: "850K Views",
    imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80",
    postUrl: "https://www.instagram.com/reel/DLMznGTs7Ux/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: "3",
    title: "Realities of Travelling",
    views: "2.1M Views",
    imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
    postUrl: "https://www.instagram.com/reel/DQfEfVDgsct/",
  },
  {
    id: "4",
    title: "Cultural Surprises: Croatia",
    views: "1.2M Views",
    imageUrl: "https://images.unsplash.com/photo-1555921015-5532091f6026?w=800&q=80",
    postUrl: "https://www.instagram.com/reel/DQfEfVDgsct/",
  },
  {
    id: "5",
    title: "Cultural Surprises: Albania",
    views: "850K Views",
    imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80",
    postUrl: "https://www.instagram.com/reel/DLMznGTs7Ux/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: "6",
    title: "Realities of Travelling",
    views: "2.1M Views",
    imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
    postUrl: "https://www.instagram.com/reel/DQfEfVDgsct/",
  },
  {
    id: "7",
    title: "Cultural Surprises: Croatia",
    views: "1.2M Views",
    imageUrl: "https://images.unsplash.com/photo-1555921015-5532091f6026?w=800&q=80",
    postUrl: "https://www.instagram.com/reel/DQfEfVDgsct/",
  },
  {
    id: "8",
    title: "Cultural Surprises: Albania",
    views: "850K Views",
    imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80",
    postUrl: "https://www.instagram.com/reel/DLMznGTs7Ux/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: "9",
    title: "Realities of Travelling",
    views: "2.1M Views",
    imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
    postUrl: "https://www.instagram.com/reel/DQfEfVDgsct/",
  },
  {
    id: "10",
    title: "Cultural Surprises: Croatia",
    views: "1.2M Views",
    imageUrl: "https://images.unsplash.com/photo-1555921015-5532091f6026?w=800&q=80",
    postUrl: "https://www.instagram.com/reel/DQfEfVDgsct/",
  },
  {
    id: "11",
    title: "Cultural Surprises: Albania",
    views: "850K Views",
    imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80",
    postUrl: "https://www.instagram.com/reel/DLMznGTs7Ux/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: "12",
    title: "Realities of Travelling",
    views: "2.1M Views",
    imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
    postUrl: "https://www.instagram.com/reel/DQfEfVDgsct/",
  },
  {
    id: "13",
    title: "Cultural Surprises: Croatia",
    views: "1.2M Views",
    imageUrl: "https://images.unsplash.com/photo-1555921015-5532091f6026?w=800&q=80",
    postUrl: "https://www.instagram.com/reel/DQfEfVDgsct/",
  },
  {
    id: "14",
    title: "Cultural Surprises: Albania",
    views: "850K Views",
    imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80",
    postUrl: "https://www.instagram.com/reel/DLMznGTs7Ux/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: "15",
    title: "Realities of Travelling",
    views: "2.1M Views",
    imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
    postUrl: "https://www.instagram.com/reel/DQfEfVDgsct/",
  }
];

// Split posts into 3 chunks for the 3 columns
const COL_1_POSTS = INSTAGRAM_POSTS.slice(0, 5);
const COL_2_POSTS = INSTAGRAM_POSTS.slice(5, 10);
const COL_3_POSTS = INSTAGRAM_POSTS.slice(10, 15);

// CSS Styles
const styles = `
  .products-carousel {
    color: #1f1f1f;
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    overflow-x: hidden;
  }
  
  .dark .products-carousel {
    color: #f4f1ea;
  }

  .col-scroll {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    min-height: 100vh;
    width: 90vw;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 0;
  }

  @media (max-width: 768px) {
    .col-scroll {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 0;
      gap: 5vh;
      align-items: center;
    }
  }

  .col-scroll__box {
    display: flex;
    flex-direction: column;
    padding: 10vh 0 15vh;
  }

  .col-scroll__box--odd {
    flex-direction: column-reverse;
    height: 100vh;
  }

  @media (max-width: 768px) {
    .col-scroll__box--odd {
      flex-direction: column;
      height: auto;
      padding: 0;
    }
    .col-scroll__box {
      width: 100%;
      align-items: center;
      padding: 2rem 0;
    }
  }

  .col-scroll__list {
    display: flex;
    flex-direction: column;
    will-change: transform;
    gap: 10vw;
  }

  .col-scroll__box--odd .col-scroll__list {
    flex-direction: column-reverse;
  }

  @media (max-width: 768px) {
    .col-scroll__box--odd .col-scroll__list {
      flex-direction: column;
    }
    .col-scroll__list {
      gap: 5vh;
    }
  }

  .post-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
    width: 20vw;
    background: transparent;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    text-decoration: none;
    outline: none;
  }

  @media (max-width: 768px) {
    .post-card {
      width: 90vw;
      margin: 0 0 10vh 0;
    }
    .post-card:last-child {
      margin-bottom: 0;
    }
  }

  .col-scroll__img-wrapper {
    position: relative;
    aspect-ratio: 0.8;
    width: 100%;
    margin-bottom: 0;
    overflow: hidden;
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 1rem;
    background: #fff;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
  }
  
  .dark .col-scroll__img-wrapper {
    border-color: rgba(255, 255, 255, 0.1);
    background: #171717;
    box-shadow: 0 4px 20px rgba(255, 255, 255, 0.03);
  }

  .col-scroll__img-wrapper img {
    position: absolute;
    top: 1rem;
    left: 1rem;
    right: 1rem;
    bottom: 1rem;
    width: calc(100% - 2rem);
    height: calc(100% - 2rem);
    object-fit: cover;
    transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    border-radius: 8px;
  }

  .post-img {
    z-index: 1;
    opacity: 1;
  }

  .post-card:hover .post-img,
  .post-card:active .post-img {
    transform: scale(1.05);
  }

  .post-card__info {
    position: absolute;
    bottom: 2rem;
    left: 0;
    width: 100%;
    text-align: center;
    z-index: 3;
    padding: 0 1.5rem;
    box-sizing: border-box;
    transition: opacity 0.4s ease, transform 0.4s ease;
  }
  
  .post-card:hover .post-card__info,
  .post-card:active .post-card__info {
    opacity: 0;
    transform: translateY(10px);
  }

  .post-card__title {
    margin: 0 0 0.5rem;
    font-family: 'Playfair Display', serif;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 1.3;
    color: #1f1f1f;
    text-shadow: 0 2px 10px rgba(255, 255, 255, 0.8);
  }
  
  .dark .post-card__title {
    color: #f4f1ea;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.6);
  }

  .post-card__views-wrapper {
    font-family: 'Inter', sans-serif;
    font-size: 0.9rem;
    letter-spacing: 0.5px;
    font-weight: 500;
    color: #1f1f1f;
  }
  
  .dark .post-card__views-wrapper {
    color: #a3a3a3;
  }

  .post-card__btn {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%) translateY(20px);
    z-index: 4;
    opacity: 0;
    background: rgba(244, 241, 234, 0.95);
    border: 1px solid #1f1f1f;
    padding: 0.75rem 1.5rem;
    font-family: 'Inter', sans-serif;
    letter-spacing: 1px;
    font-size: 0.8rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.4s ease;
    white-space: nowrap;
    color: #1f1f1f;
    border-radius: 9999px;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  .dark .post-card__btn {
    background: rgba(23, 23, 23, 0.95);
    border-color: #f4f1ea;
    color: #f4f1ea;
  }

  .post-card:hover .post-card__btn,
  .post-card:active .post-card__btn {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }

  .post-card__btn:hover {
    background: #1f1f1f;
    color: #fff;
  }
  
  .dark .post-card__btn:hover {
    background: #f4f1ea;
    color: #1f1f1f;
  }

  .post-card__overlay {
    background: linear-gradient(to top, rgba(0,0,0,0.8), transparent 40%);
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    .post-card__title {
      font-size: 1.1rem;
    }
    .post-card__views-wrapper {
      font-size: 0.8rem;
    }
    .post-card__btn {
      padding: 0.5rem 1rem;
      font-size: 0.7rem;
    }
  }
`;

export default function ProductsCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    // Only apply scroll animation on desktop
    const mm = gsap.matchMedia();

    mm.add("(min-width: 769px)", () => {
      const ctx = gsap.context(() => {
        const reverseTrigger = gsap.utils.toArray<HTMLElement>(".col-scroll__box--odd .col-scroll__list");

        reverseTrigger.forEach((element) => {
          const elementHeight = element.offsetHeight;
          const viewportHeight = window.innerHeight;
          const extraSpace = viewportHeight * 0.2;
          const scrollDistance = elementHeight + viewportHeight + extraSpace;

          gsap.to(element, {
            yPercent: 100,
            scrollTrigger: {
              trigger: element.parentElement, // Trigger when the column box hits the viewport
              start: "top top",
              end: `+=${scrollDistance}`,
              scrub: true,
              pin: element, // Pin the list itself to animate properly
            }
          });
        });
      }, containerRef);

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <main className="products-carousel relative z-20 w-full overflow-hidden bg-background">
        <div ref={containerRef} className="col-scroll">
          {/* Column 1 (Odd - reverse scroll) */}
          <div className="col-scroll__box col-scroll__box--odd">
            <div className="col-scroll__list">
              {COL_1_POSTS.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </div>

          {/* Column 2 (Even - normal scroll) */}
          <div className="col-scroll__box">
            <div className="col-scroll__list">
              {COL_2_POSTS.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </div>

          {/* Column 3 (Odd - reverse scroll) */}
          <div className="col-scroll__box col-scroll__box--odd">
            <div className="col-scroll__list">
              {COL_3_POSTS.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

function PostCard({ post }: { post: InstaPost }) {
  return (
    <a href={post.postUrl} target="_blank" rel="noopener noreferrer" className="post-card group">
      <div className="col-scroll__img-wrapper">
        <img className="post-img" src={post.imageUrl} alt={post.title} />

        <div className="absolute inset-4 z-0 pointer-events-none transition-opacity duration-300 post-card__overlay"></div>

        <div className="post-card__info">
          <h3 className="post-card__title">{post.title}</h3>
          <div className="post-card__views-wrapper">
            <span>{post.views}</span>
          </div>
        </div>

        <div className="post-card__btn">
          <Instagram className="w-4 h-4" />
          <span>View Post</span>
        </div>
      </div>
    </a>
  );
}
