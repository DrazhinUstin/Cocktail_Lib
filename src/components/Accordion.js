import React, { useEffect, useRef } from 'react';
import { getElementHeight } from '../utils';

const Accordion = ({ data }) => {
    const accordionRef = useRef(null);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleResize = () => {
        const accordion = accordionRef.current;
        [...accordion.children].forEach((child) => {
            if (!child.classList.contains('active')) return;
            child.lastElementChild.style.height = `${getElementHeight(child.lastElementChild)}px`;
        });
    };

    const handleClick = (e) => {
        const target = e.currentTarget;
        const nextSibling = target.nextElementSibling;
        const parent = target.parentElement;
        if (!parent.classList.contains('active')) {
            parent.classList.add('active');
            nextSibling.style.height = `${getElementHeight(nextSibling)}px`;
        } else {
            parent.classList.remove('active');
            nextSibling.style.height = '';
        }
        [...parent.parentElement.children].forEach((child) => {
            if (!child.classList.contains('active') || child === parent) return;
            child.classList.remove('active');
            child.lastElementChild.style.height = '';
        });
    };

    return (
        <ul className='accordion' ref={accordionRef}>
            {data.map((item, index) => {
                const { title, paragraphs, list } = item;
                return (
                    <li key={index} className='accordion-item'>
                        <header className='accordion-item-header' onClick={handleClick}>
                            <h4>{title}</h4>
                            <div></div>
                        </header>
                        <div>
                            <article className='accordion-item-content'>
                                {paragraphs.map((paragraph, index) => {
                                    return <p key={index}>{paragraph}</p>;
                                })}
                                {list && (
                                    <ul>
                                        {list.map((listItem, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    dangerouslySetInnerHTML={{ __html: listItem }}
                                                />
                                            );
                                        })}
                                    </ul>
                                )}
                            </article>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
};

export default Accordion;
