import React from 'react';
import styles from './ItemList.module.css';
import { Grid } from 'semantic-ui-react';
import Link from 'next/link';

const ItemList = ({ list }) => {
    return (
        <div>
            <Grid columns={3}>
                <Grid.Row>
                    {list.map((item, id) => {
                        return (
                            <Grid.Column key={id}>
                                <Link href={`/view/${item.id}`}>
                                    <a>
                                        <div className={styles.wrap}>
                                            <img
                                                src={item.image_link} 
                                                alt={item.name}
                                                className={styles.img_item}
                                            />
                                            <strong className={styles.tit_item}>{item.name}</strong>
                                            <span className={styles.txt_info}>
                                                {item.category} {item.product_type}
                                            </span>
                                            <strong className={styles.num_price}>$ {item.price}</strong>
                                        </div>
                                    </a>
                                </Link>
                            </Grid.Column>
                        )
                    })}
                </Grid.Row>
            </Grid>
        </div>
    );
};

export default ItemList;