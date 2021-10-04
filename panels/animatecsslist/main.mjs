const indexItemTemplate = (item = '', id) => `
  <li class="docs-indexItem"><a href="#${id}" title="${item}">${item}</a></li>
`

const indexList = (sections = [], container = '.sidebar', heading = 'h2') => {
  const containerEl = document.querySelector(container)
  const list = document.createElement('ul')

  const children = sections.map(section => {
    const title = section.querySelector(heading)
    const id = section.getAttribute('id')

    return title && indexItemTemplate(title.innerText, id)
  })

  list.classList.add('docs-index')
  list.innerHTML = children.join('\n')

  containerEl.insertAdjacentElement('beforeend', list)

  return list
}





const startAnimation = () => {
  const title = document.querySelector('.callout-title')
  const subTitle = document.querySelector('.callout-subtitle')
  const sidebar = document.querySelector('.animation-list')
  const button = document.querySelector('.callout-showList')


  const titleAnimation = 'zoomInDown'
  const subTitleAnimation = 'zoomInDown'
  const buttonAnimation = 'zoomInUp'
  const sidebarAnimation = 'fadeInRight'

  title.classList.add('animate__animated', `animate__${titleAnimation}`)
  subTitle.classList.add('animate__animated', `animate__${subTitleAnimation}`)
  button.classList.add('animate__animated', `animate__${buttonAnimation}`)
  sidebar.classList.add('animate__animated', `animate__${sidebarAnimation}`)
}

const toggleOnClick = (el, target, className) => {
  const element = document.querySelector(el)
  const targetEl = document.querySelector(target)

  element.addEventListener('click', e => {
    targetEl.classList.toggle(className)
  })
}

const clearAll = (items = [], className = 'active') => {
  items.forEach((item) => item.classList.remove(className));
};

const setEndListener = (target, defaultClass) => {
  target.addEventListener('animationend', (e) => {
    target.setAttribute('class', defaultClass);
    document.documentElement.classList.remove('isPlaying');
  });
};


const playground = (
  container = '.animation-list',
  item = '.animation-item',
  target = '.callout-title',
) => {
  const containerEl = document.querySelector(container);
  const items = [...containerEl.querySelectorAll(item)];
  const targetEl = document.querySelector(target);

  setEndListener(targetEl, target.replace('.', ''));

  containerEl.addEventListener('click', (e) => {
    const el = e.target

    if(el.classList.contains('animation-item--title')) {
      clearAll(items);
      const animation = `animate__${el.parentElement.getAttribute('data-animation')}`;

      targetEl.classList.add('animate__animated', animation);
      document.documentElement.classList.add('isPlaying');
      document.documentElement.classList.remove('animationList-active');
    }

    if (el.classList.contains('copy-icon')) {
      const animation = `animate__${el.parentElement.getAttribute('data-animation')}`;
      navigator.clipboard.writeText(animation);
    }
  });
};





playground();

toggleOnClick('.callout-showList', 'html', 'animationList-active');
toggleOnClick('.callout-hideList', 'html', 'animationList-active');

requestAnimationFrame(startAnimation);

document.querySelectorAll('.copy-icon').forEach(icon => {
    icon.addEventListener('click', () => {
        icon.classList.add('copied');
        document.querySelector('.copied .tooltip').textContent = "Copied!";
        setTimeout(() => {
            icon.children[0].textContent = "Copy class name to clipboard"
            icon.classList.remove('copied')
        }, 750)
    })
})
