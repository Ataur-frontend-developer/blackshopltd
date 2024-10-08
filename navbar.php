<div class="navbar">
    <div class="logo">
        <a href="#"><img src="images/Brand.png"></a>
    </div>
    <div class="nav-list">
        <a href="index.php" class="<?= (isset($active) && $active == 'index') ? 'active' : ''; ?>"><i class="fa-solid fa-user"></i>Profile</a>
        <a href="order.php" class="<?= (isset($active) && $active == 'order') ? 'active' : ''; ?>"><i class="fa-solid fa-cart-shopping"></i>Orders</a>
        <a href="#"><i class="fa-solid fa-bag-shopping"></i>Shop</a>
        <a href="#"><i class="fa-solid fa-right-from-bracket"></i>Logout</a>
    </div>
</div>