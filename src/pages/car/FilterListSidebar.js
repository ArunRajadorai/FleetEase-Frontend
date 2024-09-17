// Libraries
import { FormCheck } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';

// Site Data
// import bannerImg from '../../src/assets/images/banner.webp';

function FilterListingSidebar(props) {
  const SearchListGroup = [
    {
      id: 1,
      item: 'Year',
      checklist: [
        { id: 1, name: 'All Years', label: 'All Years', typr: 'checkbox' },
        { id: 2, name: '2017', label: '2017', typr: 'checkbox' },
        { id: 3, name: '2018', label: '2018', typr: 'checkbox' },
        { id: 4, name: '2019', label: '2019', typr: 'checkbox' },
        { id: 5, name: '2020', label: '2020', typr: 'checkbox' },
        { id: 6, name: '2021', label: '2021', typr: 'checkbox' },
        { id: 7, name: '2022', label: '2022', typr: 'checkbox' },
        { id: 8, name: '2023', label: '2023', typr: 'checkbox' },
        { id: 9, name: '2024', label: '2024', typr: 'checkbox' },
      ],
    },
    {
      id: 2,
      item: 'Condition',
      checklist: [
        {
          id: 10,
          name: 'All Conditions',
          label: 'All Conditions',
          typr: 'checkbox',
        },
        { id: 11, name: 'Brand New', label: 'Brand New', typr: 'checkbox' },
        {
          id: 12,
          name: 'Slightly Used',
          label: 'Slightly Used',
          typr: 'checkbox',
        },
        { id: 13, name: 'Used', label: 'Used', typr: 'checkbox' },
      ],
    },
    {
      id: 5,
      item: 'Transmission',
      checklist: [
        { id: 1, name: 'All Transmissions', label: 'All Transmissions', typr: 'checkbox' },
        { id: 2, name: 'Manual', label: 'Manual', typr: 'checkbox' },
        { id: 3, name: 'Automatic', label: 'Automatic', typr: 'checkbox' },
      ],
    },
  ];

  const [active, setActive] = useState();

  return (
    <>
      <div className="listing-sidebar">
        <div className="widget">
          <div className="widget-search">
            <h5 className="title">Advanced Search</h5>
          </div>
          <div className="search-list-group">
            <ul className="list-group">
              {SearchListGroup.map((val, index) => (
                <li
                  key={index}
                  className="list-group-item"
                  onClick={() => setActive(val.id)}
                >
                  <Link to="#" className={active === val.id ? 'active' : ''}>
                    {val.item}
                  </Link>
                  <ul>
                    {val.checklist.map((val, index) => (
                      <li key={index}>
                        <FormCheck
                          label={val.label}
                          name={val.name}
                          type={val.type}
                          id={val.id}
                        />
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="widget-banner">
          {/*<img className="img-fluid" src={bannerImg} alt="" />*/}
        </div>
      </div>
    </>
  );
}
export default FilterListingSidebar;
