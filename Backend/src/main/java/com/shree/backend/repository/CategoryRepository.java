package com.shree.backend.repository;

import com.shree.backend.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface CategoryRepository extends JpaRepository<Category, Long> {
    public  Category findByName(String name);

    @Query("SELECT c From Category c Where c.name=:name And c.parentCategory.name=:parentCategoryName")
    public Category findByNameAndParant(@Param("name")String name,@Param("ParentCategoryName")String parentCategoryName);
}
